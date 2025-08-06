/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      severity: 'error',
      comment: 'This dependency creates a circular dependency',
      from: {},
      to: {
        circular: true,
      },
    },
  ],
  options: {
    doNotFollow: {
      path: 'node_modules',
      dependencyTypes: ['npm-no-pkg', 'npm-unknown'],
    },
    includeOnly: ['^apps/', '^libs/', '^tools/'],
    tsPreCompilationDeps: false,
    tsConfig: {
      fileName: './tsconfig.base.json',
    },
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['import', 'require', 'node', 'default'],
    },
    reporterOptions: {
      dot: {
        collapsePattern: 'node_modules/[^/]+',
      },
      archi: {
        collapsePattern:
          '^(packages|lib|app|bin|test|spec|__tests__|__mocks__|__testfixtures__)/',
      },
    },
  },
};
