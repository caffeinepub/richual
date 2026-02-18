import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Application {
    id: bigint;
    bio: string;
    status: ApplicationStatus;
    email: string;
    experience: string;
    motivation: string;
    timestamp: Time;
    lastName: string;
    firstName: string;
}
export type Time = bigint;
export enum ApplicationStatus {
    pending = "pending",
    approved = "approved",
    declined = "declined"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getApplications(): Promise<Array<Application>>;
    getCallerUserRole(): Promise<UserRole>;
    isCallerAdmin(): Promise<boolean>;
    submitApplication(firstName: string, lastName: string, email: string, bio: string, motivation: string, experience: string): Promise<bigint>;
}
