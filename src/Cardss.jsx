


function Cards(props){
    console.log(props);
    return(
      <>
    <div className='col-sm-2 mb-5'>
    <div className='card text-white bg-dark border border-light'>
    <img className="rounded border border-danger" src={props.imgSrc} alt=' Banner' />
    
    <span>{props.title}</span>
    <h4 className=''>{props.mName}</h4>
    <a href={props.link} target=''>
      <button className='btn btn-outline-danger mb-2'>Watch now</button>
    </a>
    </div>
    
    </div>
  </>
    )
  }export default Cards;