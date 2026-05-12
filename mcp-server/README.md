# rzazo-alignment MCP server

Minimal Next.js MCP server exposing a single tool, `get_profile`, that returns the live contents of `PROFILE.md` from the `richzazo/multi-project-alignment-public` GitHub repo (main branch, no caching). Intended for Claude/MCP clients to pull the latest multi-project alignment profile at session start or on demand.

## Deploy to Vercel

Set the project root to `mcp-server/` (the subdirectory containing this README). No environment variables are required — the tool calls the public GitHub contents API. Once deployed, the MCP endpoint will be available at `https://<your-deployment>.vercel.app/api/mcp`. Configure your MCP client to point at that URL.
