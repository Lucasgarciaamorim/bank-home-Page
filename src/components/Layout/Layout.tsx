import { Container } from "./styles";

const Layout = ({ children }: any) => {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    );
};

export default Layout;
