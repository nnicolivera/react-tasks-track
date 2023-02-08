export default function Button({color, text, onAdd}) {
 

  return (
    <button onClick={onAdd} style={{backgroundColor: color}} className='btn'>{text}</button>
  )
}