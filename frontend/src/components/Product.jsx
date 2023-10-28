
function ProductGrid(props)
{
  return <div className='product-grid-container'>
    {props.children}
  </div>
}

function ProductTile(props)
{
  return <div className='product-grid-tile' onClick={props.onClick}>
    <img alt='Loading' src={props.src}/>
    <p>{props.title}</p>
    <p>{"$"+props.price+""}</p>
  </div>
}

export {ProductGrid, ProductTile};