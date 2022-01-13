const common = [
  '--require-module ts-node/register' // Load TypeScript module
]

const apiBackend = [
  ...common,
  'tests/apps/api/backend/features/**/*.feature',
  '--require tests/apps/api/backend/features/step_definitions/*.steps.ts'
].join(' ')

module.exports = {
  apiBackend
}
