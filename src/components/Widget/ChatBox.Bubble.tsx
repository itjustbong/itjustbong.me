import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { ReactNode } from "react"

interface Props {
  children: string | ReactNode
  type: "server" | "client"
}

const ChatBubble = (props: Props) => {
  return (
    <Container type={props.type}>
      <Bubble type={props.type}>{props.children}</Bubble>
    </Container>
  )
}

export default ChatBubble

const Bubble = styled.div((props: { type: "server" | "client" }) => ({
  maxWidth: "80%",
  padding: "0.5rem",
  marginBottom: "0.5rem",
  backgroundColor: props.type === "server" ? "white" : "#20A090",
  color: props.type === "server" ? "black" : "white",
  borderRadius:
    props.type === "server" ? "0 1rem 1rem 1rem" : "1rem 0 1rem 1rem",
}))

const Container = styled.div((props: { type: "server" | "client" }) => ({
  width: "100%",
  display: "flex",

  justifyContent: props.type === "server" ? "left" : "right",
}))
