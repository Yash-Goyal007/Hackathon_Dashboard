import React from 'react'
import Card from './Card';
import classes from './Card.module.css';
const Catalog = () => {
    const dt=JSON.parse(localStorage.getItem("data"))
    const data=dt?Array.from(dt):[];
    console.log(data);
  return (
    <>
              <div className={classes.flex}>
                {
                    data && data.map((e)=>{
                        return <Card title={e.title} summary ={e.summary} id={e.id} />
                    })
                }
</div>
    </>
  )
}

export default Catalog
