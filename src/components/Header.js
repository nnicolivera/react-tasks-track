import Button from '../components/Button'

export default function Header({title, onAdd, showAdd}) {
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'grey' : 'green'} text={showAdd ? 'Close' : 'Add'} onAdd={onAdd}></Button>
    </header>
  )
}