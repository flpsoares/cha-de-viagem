import { useState } from 'react'
import { Button, Container, Title, Image, Doar, Link } from '../styles/home'

export default function Home() {
  const doar = () => {
    setImage('feliz')
    setClicked(true)
    setOpacity(1)
  }

  const feliz = () => {
    if (image === 'triste') {
      setImage('feliz')
    }
  }

  const triste = () => {
    if (!clicked) {
      setImage('triste')
    }
    if (clicked) {
      setImage('feliz')
    }
  }

  const [opacity, setOpacity] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [image, setImage] = useState('triste')

  return (
    <Container>
      <Image src={`/${image}.jpg`} />
      <Title>
        Estou arrecadando fundos para fazer uma viagem importantíssima, não existe
        valor mínimo de doação, porém se você puder, doe o que tocar no seu coração,
        ficarei muito feliz com a colaboração de qualquer um que se prontificar a
        ajudar um amigo nessa nova jornada. Amo você, talvez, não sei quem é você
        ainda.
      </Title>
      <Link
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5522997783931&text=Voc%C3%AA%20me%20ama%3F"
      >
        Pra saber se eu te amo, clique aqui
      </Link>
      <Button onMouseLeave={triste} onMouseEnter={feliz} onClick={doar}>
        Doar
      </Button>
      <Doar opacity={opacity}>
        CHAVE PIX ALEATÓRIA: 7da07462-b78e-4bdf-b5b7-d594176f29b4
      </Doar>
    </Container>
  )
}
