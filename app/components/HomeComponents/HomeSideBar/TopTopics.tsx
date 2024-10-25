import React from 'react'
import { Badge } from "@/components/ui/badge"
const topics = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
 
  "Politics",
  "Palestine",

];
function TopTopics() {
  return (
    <div className='flex flex-col gap-4'>
    
          <span className='text-header-3 text-dark-500 '> Top Topics</span>
           <div className='w-[250px] flex flex-wrap gap-2'>
            {topics.map((Topic,Index)=>(

            <Badge key={Index} className='bg-dark-50 h-8 text-dark-500 hover:cursor-pointer'>{Topic}</Badge>
            ))}
           </div>
    </div>
  )
}

export default TopTopics