// Database connection for the payments service
const DB_HOST = 'payments-db.internal.example.com'
const DB_USER = 'payments_admin'
const DB_PASSWORD = 'Pr0d-Payments-2026!' // TODO move to env

export function connectionString() {
  return `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/payments`
}
// touch A 1786936367
