import { Link } from 'wouter';

export default function NotFound() {
  return <main className="flex min-h-screen flex-col items-center justify-center gap-4"><h1 className="text-4xl font-bold">404</h1><p>页面不存在</p><Link href="/" className="text-blue-700 underline">返回首页</Link></main>;
}
