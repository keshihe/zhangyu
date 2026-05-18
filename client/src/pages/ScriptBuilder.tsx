import { useMemo, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Magnet, MessageSquareWarning, Flame, Speech, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

interface ScriptSegment { id: string; name: string; duration: string; icon: React.ReactNode; placeholder: string; content: string; }
interface Hashtag { category: string; tag: string; placeholder: string; }

const initialSegments: ScriptSegment[] = [
  { id: 'hook', name: '钩子', duration: '0:00-0:15', icon: <Magnet className='text-blue-700'/>, placeholder: '用反差开场…', content: '' },
  { id: 'pain1', name: '痛点一', duration: '0:15-0:45', icon: <MessageSquareWarning className='text-blue-700'/>, placeholder: '第一层痛点…', content: '' },
  { id: 'pain2', name: '痛点二', duration: '0:46-1:24', icon: <Flame className='text-blue-700'/>, placeholder: '第二层痛点…', content: '' },
  { id: 'pain3', name: '痛点三', duration: '1:25-2:08', icon: <Speech className='text-blue-700'/>, placeholder: '第三层痛点…', content: '' },
  { id: 'cta', name: '结语 & CTA', duration: '2:09-2:23', icon: <CheckCircle className='text-blue-700'/>, placeholder: '行动指令…', content: '' },
];

export default function ScriptBuilder() { const [segments, setSegments] = useState(initialSegments); const [tags, setTags] = useState<Hashtag[]>([{ category: '行业大词', tag: '', placeholder: '#洗纹身' }, { category: '核心诉求', tag: '', placeholder: '#无痛修复' }, { category: '高频搜索词', tag: '', placeholder: '#纹身后悔怎么办' }, { category: '技术关键词', tag: '', placeholder: '#皮秒技术' }]);
const preview = useMemo(() => segments.map((s) => `${s.name}(${s.duration})\n${s.content || '待填写'}`).join('\n\n'), [segments]);
return <main className='mx-auto max-w-7xl px-4 py-10'><Link href='/'><Button className='mb-6 bg-gray-800 hover:bg-gray-900'><ArrowLeft className='mr-2 h-4 w-4'/>返回首页</Button></Link><h1 className='text-4xl font-bold text-blue-800'>脚本构建器</h1><p className='text-gray-600'>实时生成可执行短视频脚本。</p><div className='mt-8 grid gap-6 lg:grid-cols-3'><div className='space-y-4 lg:col-span-2'>{segments.map((seg, i) => <Card key={seg.id}><div className='mb-3 flex items-center justify-between'><div className='flex items-center gap-2'>{seg.icon}<h3 className='font-semibold'>{i + 1}. {seg.name}</h3></div><span className='text-sm text-gray-500'>{seg.duration}</span></div><textarea aria-label={seg.name} className='min-h-28 w-full rounded-xl border border-gray-200 p-3' placeholder={seg.placeholder} value={seg.content} onChange={(e) => setSegments((prev) => prev.map((x) => x.id === seg.id ? { ...x, content: e.target.value } : x))}/><p className='mt-2 text-right text-xs text-gray-500'>{seg.content.length} 字</p></Card>)}<Card><h3 className='font-semibold'>话题标签策略</h3><div className='mt-4 grid gap-3 md:grid-cols-2'>{tags.map((t) => <label key={t.category} className='text-sm'>{t.category}<input className='mt-1 w-full rounded-lg border p-2' placeholder={t.placeholder} value={t.tag} onChange={(e)=>setTags((prev)=>prev.map((x)=>x.category===t.category?{...x, tag:e.target.value}:x))}/></label>)}</div></Card></div><aside className='space-y-4 lg:sticky lg:top-6 lg:h-fit'><Card><h3 className='font-semibold'>脚本预览</h3><pre className='mt-3 whitespace-pre-wrap rounded-lg bg-gray-50 p-3 text-sm'>{preview}</pre><p className='mt-3 text-sm'>{tags.map((t)=>t.tag).filter(Boolean).join(' ') || '暂无标签'}</p></Card><Card><h3 className='font-semibold'>导出选项</h3><div className='mt-3 space-y-2'><Button className='w-full'>复制脚本</Button><Button className='w-full bg-gray-700 hover:bg-gray-800'>下载 TXT</Button><Button className='w-full bg-gray-700 hover:bg-gray-800'>下载 PDF</Button></div></Card><Card className='bg-orange-50'><h3 className='font-semibold text-orange-700'>创作建议</h3><ul className='mt-2 list-disc space-y-1 pl-5 text-sm'><li>开场先给结果</li><li>每 8 秒一个信息点</li><li>加入具体数据</li><li>减少空泛形容词</li><li>CTA 只保留一个动作</li></ul></Card></aside></div></main>; }
