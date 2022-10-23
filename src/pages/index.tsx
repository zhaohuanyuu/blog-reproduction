import { Container, Heading } from "theme-ui"

import SEO from "../components/core/SEO"

const IndexPage = () => (
  <Container sx={{ mt: 6, maxWidth: ['100%', 600, 700, 800] }}>
    <Heading sx={{ textAlign: 'center' }}>This is Index</Heading>
  </Container>
)

export default IndexPage;
export const Head = () => <SEO title='Index' />;
