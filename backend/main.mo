import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Role = AccessControl.UserRole;

  public type ApplicationStatus = {
    #pending;
    #approved;
    #declined;
  };

  public type Application = {
    id : Nat;
    timestamp : Time.Time;
    status : ApplicationStatus;
    firstName : Text;
    lastName : Text;
    email : Text;
    bio : Text;
    motivation : Text;
    experience : Text;
  };

  var currentId : Nat = 0;
  var applications : [Application] = [];

  // Public endpoint - anyone can submit an application (including anonymous/guest users)
  // No authorization check needed as this is intentionally public
  public shared func submitApplication(
    firstName : Text,
    lastName : Text,
    email : Text,
    bio : Text,
    motivation : Text,
    experience : Text,
  ) : async Nat {
    let application : Application = {
      id = currentId;
      timestamp = Time.now();
      status = #pending;
      firstName;
      lastName;
      email;
      bio;
      motivation;
      experience;
    };
    currentId += 1;
    applications := applications.concat([application]);
    application.id;
  };

  // Admin-only endpoint to view all applications
  public query ({ caller }) func getApplications() : async [Application] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can access applications");
    };
    applications.sort(
      func(a, b) {
        if (a.timestamp > b.timestamp) { #less } else if (a.timestamp < b.timestamp) {
          #greater;
        } else { #equal };
      }
    );
  };
};
