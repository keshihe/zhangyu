import express from 'express';
import path from 'node:path';

const app = express();
const port = process.env.PORT || 3000;
const distPath = path.resolve(process.cwd(), 'dist');

app.use(express.static(distPath));
app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
