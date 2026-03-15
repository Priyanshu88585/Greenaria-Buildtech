import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
export async function POST(req){
  try{
    const body = await req.json()
    const filePath = path.join(process.cwd(),'src/data/properties.json')
    const data = JSON.parse(fs.readFileSync(filePath,'utf8'))
    data.push({ id: body.title.toLowerCase().replace(/\s+/g,'-'), ...body })
    fs.writeFileSync(filePath, JSON.stringify(data,null,2))
    return NextResponse.json({success:true})
  }catch(e){
    console.error(e)
    return NextResponse.json({success:false},{status:500})
  }
}
