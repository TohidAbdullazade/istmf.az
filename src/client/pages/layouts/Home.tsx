import SearchField from "../../components/SearchField.tsx";
import Table from "../../components/Table.tsx";
import TableHeaders from "../../components/TableHeaders.tsx";
import Partners from "../../components/Partners.tsx";
import Footer from "../../components/Footer.tsx";

const Home = () => {
    return (
        <div className="relative flex flex-col  justify-center items-center bg-white ">
            <SearchField/>
            <TableHeaders/>
            <Table/>
            <Partners/>
            <Footer/>
        </div>
    );
};

export default Home;