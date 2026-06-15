import { createMcpHandler } from 'mcp-handler';
import { z } from 'zod';

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      'get_profile',
      {
        title: 'Get Multi-Project Profile',
        description: 'Fetches the latest PROFILE.md from richzazo/multi-project-alignment-public main branch. Returns full markdown content. Use at session start or on any profile sync/refresh request.',
        inputSchema: {},
      },
      async () => {
        const r = await fetch(
          'https://raw.githubusercontent.com/richzazo/multi-project-alignment-public/main/PROFILE.md',
          {
            headers: { 'User-Agent': 'rzazo-alignment-mcp/1.0' },
            cache: 'no-store',
          }
        );
        if (!r.ok) {
          throw new Error(`GitHub raw ${r.status}: ${await r.text()}`);
        }
        const text = await r.text();
        return { content: [{ type: 'text', text }] };
      }
    );
  },
  {},
  { basePath: '/api', maxDuration: 60, verboseLogs: true }
);

export { handler as GET, handler as POST };
