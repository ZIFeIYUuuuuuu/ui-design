# Frontend Review Report — [Product / Page / Journey]

## 1. Review Scope
- Review ID:
- Date:
- Product:
- Environment: LOCAL / STAGING / PRODUCTION
- Repository / branch / commit:
- Review mode: VISUAL_ONLY / INTERACTION_ONLY / PRODUCT_JOURNEY / FULL_PRODUCT_UX
- User role / permissions:
- Routes and features in scope:
- Explicit constraints (e.g. visual style locked):
- Browser / version / viewport / input mode:
- Evidence sources available:
- Explicit exclusions (payments, paid credits, destructive actions, etc.):

## 2. Verdict and Coverage
- Verdict: KEEP / IMPROVE / REWORK / BLOCKED / INSUFFICIENT_EVIDENCE
- Confidence:
- Routes/features discovered:
- Routes/features inspected:
- Journeys planned:
- Journeys executed:
- Scenarios: PASS / FAIL / BLOCKED / NOT_TESTED / NOT_APPLICABLE
- One-sentence conclusion:

## 3. Product and Route Inventory
| Area / route | User role | Purpose | Entry point | Next step / exit | Inspected? | Limitation |
|---|---|---|---|---|---|---|

## 4. Journey Maps (for interaction/product modes)

### Journey [ID] — [User goal]
- User role:
- Starting condition:
- Preconditions:
- Entry point:
| Step | User action | Expected response | Actual observation | State / evidence |
|---|---|---|---|---|
| | | | | |

- Success condition:
- Alternative path:
- Failure path:
- Recovery path:
- Persistence / re-entry:
- Not tested:

## 5. Scenario Coverage
| Path / scenario ID | Steps executed through | Expected / observed | Result | Evidence / finding IDs | Reason and remaining steps if incomplete |
|---|---|---|---|---|---|

Allowed results: PASS / FAIL / BLOCKED / NOT_TESTED / NOT_APPLICABLE. Never count BLOCKED or NOT_TESTED as PASS.

## 6. State and Cross-Layer Analysis
| Entity / operation | UI region / layer | Displayed state | Task ID / version | Evidence source | Consistent? |
|---|---|---|---|---|---|

Map requested, accepted, queued, running, succeeded, failed, cancelled, persisted, rendered, and recoverable states where relevant. Do not invent states that the product does not have.

## 7. Findings — Complete Prioritised Register

### [F-001] [Finding title]
- Severity: P0 / P1 / P2 / P3
- Affected role / journey:
- Classification: OBSERVED_SYMPTOM / VERIFIED_ROOT_CAUSE / LIKELY_CAUSE / UNCONFIRMED_HYPOTHESIS
- Confidence: HIGH / MEDIUM / LOW
- Preconditions:
- Reproduction steps:
- Expected:
- Actual:
- Evidence and timestamp:
- User impact:
- Root cause (only if verified):
- Hypotheses and evidence needed:
- Smallest safe recommendation:
- Side-effect / retry implications:
- Verification and regression plan:

## 8. Visual Assessment (only for VISUAL_ONLY or FULL_PRODUCT_UX)
| Area | Status | Screenshot / evidence | Finding |
|---|---|---|---|

## 9. What Works and Must Be Preserved
- Existing interactions:
- Existing visual direction (if relevant):
- Business behavior:
- Useful shortcuts / feedback:
- Other strengths:

## 10. Safety and Side Effects
- Paid/credit-consuming actions not executed:
- Destructive/irreversible actions not executed:
- Operations with unknown acceptance status:
- Retry safety:
- Credentials and sensitive data handling:

## 11. Recommendations
| Priority | Finding IDs | Change | Expected user benefit | Risk/dependency | Verification |
|---|---|---|---|---|---|

Separate UX recommendations from verified engineering root-cause fixes.

## 12. Regression Plan
| Test ID | Scenario | Setup | Steps | Expected result | Side-effect guard |
|---|---|---|---|---|---|

## 13. Evidence Gaps and Limitations
- Routes not inspected:
- Journeys not executed:
- Roles/devices not covered:
- Network/server/backend evidence unavailable:
- Historical tests only:
- Root causes not verified:
- Remaining unknowns:

## 14. Executive Summary
- Top three risks:
- What should be fixed first:
- What should remain unchanged:
- What requires engineering investigation:
- What requires owner approval:
- Suggested next step:
