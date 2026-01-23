// string lateral union type
export type KycStatus =
|"NOT_STARTED"
|"PROFILE_SUBMITTED"
|"DOC_SUBMITTED"
|"PENDING_REVIEW"
|"APPROVED"
|"REJECTED";

export type UserStatus=
|"PENDING_VERIFICATION"
|"ACTIVE"
|"BLOCKED"

export type OnboardingNext =
  | "KYC_PROFILE"
  | "KYC_DOCUMENT"
  | "PENDING_APPROVAL"
  | "DASHBOARD"
  | "REJECTED"
  | "BLOCKED";

 export function computeOnboardingNext(input: {
  userStatus: UserStatus;
  kycStatus: KycStatus;
}): OnboardingNext {
  const { userStatus, kycStatus } = input;

  if (userStatus === "BLOCKED") return "BLOCKED";
  if (kycStatus === "REJECTED") return "REJECTED";

  // still onboarding
  if (kycStatus === "NOT_STARTED") return "KYC_PROFILE";
  if (kycStatus === "PROFILE_SUBMITTED") return "KYC_DOCUMENT";

  // finished submitting, waiting admin
  if (kycStatus === "DOC_SUBMITTED" || kycStatus === "PENDING_REVIEW") return "PENDING_APPROVAL";

  // fully approved
  if (kycStatus === "APPROVED" && userStatus === "ACTIVE") return "DASHBOARD";

  // default safe fallback
  return "PENDING_APPROVAL";
}
