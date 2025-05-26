const http=require('http')
const fs=require('fs')
const url=require('url')

const server=http.createServer((req,res)=>{
  if(req.url==='/favicon.ico') return res.end();
  
  const log=`${req.url} is received \n`;
  const myurl=url.parse(req.url)
  console.log(myurl)

  fs.appendFile('log.txt',log,(err,data)=>{
     switch(myurl.pathname){
      case '/':
      return res.end('welcome to the home page')
      break;

      case '/about':
       const username=myurl.query.search_query;
       return res.end(`hi ${username}`);
      break;
        
      case '/search':
      const search=myurl.query.search;
      return res.end(`${search}`);

      default:
      return res.end('END')
     }
  })
})
const port=3000;
server.listen(port,()=>{
  console.log('server is running!')
})