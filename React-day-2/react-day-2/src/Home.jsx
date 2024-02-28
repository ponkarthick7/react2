function Home(){

  const list =[
    {
        title :'react',
        mentor:'ponkarthick',
        points: 5
    },
    {
        title :'Node',
        mentor:'ponkarthick',
        points: 5
    },
    {
        title :'MongoDB',
        mentor:'ponkarthick',
        points: 5
    }
  ]

return (

   <div>
    <h1>list of courses</h1>
    <ol>
    {list.map(function(item){
            return <li>{`${item.mentor}-${item.title}-${item.points}`}</li>
        })}
      
    </ol>
   </div>
)

}

   

export default Home