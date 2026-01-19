import type { Handler } from "./types.js";
import { health, ready } from "./handlers/health.js";
import * as AuthHandlers from "./handlers/auth.js";
import { me } from "./handlers/me.js";
import { requireAuth } from "./middleware/auth.js";
import * as Kyc from "./handlers/kyc.js";
import { requireAdmin } from "./middleware/admin.js";
import * as AdminVerify from "./handlers/admin.verification.js";
import * as Accounts from "./handlers/accounts.js";
import * as Money from "./handlers/money.js";
import * as Tx from "./handlers/transactions.js";
import { requireApproved } from "./middleware/approved.js";
import * as PayeeHandlers from "./handlers/payees.js";
import * as SendMoney from "./handlers/sendMoney.js";
import * as CardHandlers from "./handlers/cards.js";
import * as StatementHandlers from "./handlers/statements.js";
import * as Notifs from "./handlers/notifications.js";
import * as AdminKyc from "./handlers/admin.kyc.js";
import * as ProfileSettings from "./handlers/settings.profile.js";
import * as SecuritySettings from "./handlers/settings.security.js";
import * as SessionSettings from "./handlers/settings.sessions.js";
import * as NotifPrefs from "./handlers/settings.notifications.js";



export type Route = {
  method: string;
  pattern: URLPattern; 
  handler: Handler;
};

function p(pathname: string) {
  // only match pathname (ignore host/protocol)
  return new URLPattern({ pathname });
}

export const routes: Route[] = [
  { method: "GET",  pattern: p("/health"), handler: health },
  { method: "GET",  pattern: p("/ready"),  handler: ready },

  // Accounts (approved users only)
{ method: "POST", pattern: p("/v1/accounts"), handler: requireAuth(requireApproved(Accounts.create)) },
{ method: "GET",  pattern: p("/v1/accounts"), handler: requireAuth(requireApproved(Accounts.list)) },
{ method: "GET",  pattern: p("/v1/accounts/:id"), handler: requireAuth(requireApproved(Accounts.getById)) },

// Money (approved users only)
{ method: "POST", pattern: p("/v1/topups"), handler: requireAuth(requireApproved(Money.topup)) },
{ method: "POST", pattern: p("/v1/transfers"), handler: requireAuth(requireApproved(Money.transfer)) },

// Transactions (approved users only)
{ method: "GET", pattern: p("/v1/transactions"), handler: requireAuth(requireApproved(Tx.list)) },
{ method: "GET", pattern: p("/v1/transactions/:id"), handler: requireAuth(requireApproved(Tx.getById)) },




  { method: "POST", pattern: p("/v1/auth/signup"),  handler: AuthHandlers.signup },
  { method: "POST", pattern: p("/v1/auth/login"),   handler: AuthHandlers.login },
  { method: "POST", pattern: p("/v1/auth/refresh"), handler: AuthHandlers.refresh },
  { method: "POST", pattern: p("/v1/auth/logout"),  handler: AuthHandlers.logout },

  { method: "GET",  pattern: p("/v1/me"), handler: requireAuth(me) },

  { method: "POST", pattern: p("/v1/kyc/profile"),  handler: requireAuth(Kyc.submitProfile) },
  { method: "POST", pattern: p("/v1/kyc/document"), handler: requireAuth(Kyc.submitDocument) },
  { method: "GET",  pattern: p("/v1/kyc/status"),   handler: requireAuth(Kyc.status) },

  // ✅ Admin param routes (now works)
  { method: "POST", pattern: p("/admin/v1/users/:id/approve"), handler: requireAdmin(AdminVerify.approveUser) },
  { method: "POST", pattern: p("/admin/v1/users/:id/reject"),  handler: requireAdmin(AdminVerify.rejectUser) },

  // Payees (approved users only)
{ method: "POST", pattern: p("/v1/payees"), handler: requireAuth(requireApproved(PayeeHandlers.create)) },
{ method: "GET",  pattern: p("/v1/payees"), handler: requireAuth(requireApproved(PayeeHandlers.list)) },
{ method: "GET",  pattern: p("/v1/payees/:id"), handler: requireAuth(requireApproved(PayeeHandlers.getById)) },
{ method: "DELETE", pattern: p("/v1/payees/:id"), handler: requireAuth(requireApproved(PayeeHandlers.remove)) },

{ method: "POST", pattern: p("/v1/send-money"), handler: requireAuth(requireApproved(SendMoney.send)) },

{ method: "POST", pattern: p("/v1/cards"), handler: requireAuth(requireApproved(CardHandlers.issue)) },
{ method: "GET",  pattern: p("/v1/cards"), handler: requireAuth(requireApproved(CardHandlers.list)) },
{ method: "GET",  pattern: p("/v1/cards/:id"), handler: requireAuth(requireApproved(CardHandlers.getById)) },
{ method: "GET",  pattern: p("/v1/cards/:id/reveal"), handler: requireAuth(requireApproved(CardHandlers.reveal)) },
{ method: "POST", pattern: p("/v1/cards/:id/block"), handler: requireAuth(requireApproved(CardHandlers.block)) },
{ method: "POST", pattern: p("/v1/cards/:id/unblock"), handler: requireAuth(requireApproved(CardHandlers.unblock)) },

{ method: "GET", pattern: p("/v1/statements/:accountId"), handler: requireAuth(requireApproved(StatementHandlers.getJson)) },
{ method: "GET", pattern: p("/v1/statements/:accountId.csv"), handler: requireAuth(requireApproved(StatementHandlers.getCsv)) },

{ method: "GET",  pattern: p("/v1/notifications"), handler: requireAuth(requireApproved(Notifs.list)) },
{ method: "POST", pattern: p("/v1/notifications/:id/read"), handler: requireAuth(requireApproved(Notifs.readOne)) },
{ method: "POST", pattern: p("/v1/notifications/read-all"), handler: requireAuth(requireApproved(Notifs.readAll)) },

{ method: "GET",  pattern: p("/admin/v1/kyc/pending"), handler: requireAdmin(AdminKyc.listPending) },
{ method: "GET",  pattern: p("/admin/v1/kyc/users/:id"), handler: requireAdmin(AdminKyc.getUser) },
{ method: "POST", pattern: p("/admin/v1/kyc/users/:id/approve"), handler: requireAdmin(AdminKyc.approve) },
{ method: "POST", pattern: p("/admin/v1/kyc/users/:id/reject"), handler: requireAdmin(AdminKyc.reject) },


{ method: "GET",   pattern: p("/v1/profile"), handler: requireAuth(requireApproved(ProfileSettings.get)) },
{ method: "PATCH", pattern: p("/v1/profile"), handler: requireAuth(requireApproved(ProfileSettings.patch)) },

{ method: "POST", pattern: p("/v1/security/change-password"), handler: requireAuth(requireApproved(SecuritySettings.changePasswordHandler)) },

{ method: "GET",    pattern: p("/v1/security/sessions"), handler: requireAuth(requireApproved(SessionSettings.list)) },
{ method: "DELETE", pattern: p("/v1/security/sessions/:id"), handler: requireAuth(requireApproved(SessionSettings.revoke)) },

{ method: "GET", pattern: p("/v1/notification-preferences"), handler: requireAuth(requireApproved(NotifPrefs.get)) },
{ method: "PUT", pattern: p("/v1/notification-preferences"), handler: requireAuth(requireApproved(NotifPrefs.put)) },
];