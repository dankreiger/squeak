module.exports = {
  ci: {
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'yarn http-server -p 3000 out',
      staticDistDir: './dist/apps/frontend/web',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
