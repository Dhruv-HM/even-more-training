import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import JsonData from "../data.json";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const TablePage = () => {
    const classes = useStyles();
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const[sliceIndex, setNext] = useState(1);

    const getProductData = async () => {
        try {
            const data = JsonData;
            console.log(data);
            setProduct(data);
        } catch (e) {
            console.log(e);
        }
    };

    function next(){
        setNext(sliceIndex+2);
        console.log(sliceIndex);
    }

    function previous(){
        setNext(sliceIndex-2);
        console.log(sliceIndex)
    }

    useEffect(() => {
        getProductData();
    }, []);
    return (
        <div className="">
            <input
                type="text"
                placeholder="Search here"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}

                style={{margin:"1%"}}
            />
            <button onclick={previous} style={{backgroundColor:"transparent",border:0}}><ArrowBackIosIcon/></button>

            <button onClick={next} style={{backgroundColor:"transparent",border:0}}><ArrowForwardIosIcon/></button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product</StyledTableCell>

                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell >Product Details</StyledTableCell>
                            <StyledTableCell >Product Price</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {JsonData
                            .filter((item) => {
                                if (search == "") {
                                    return item;
                                } else if (
                                    item.productName.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return item;
                                }
                            })
                            .map((item) => {
                                return (
                                    <StyledTableRow key={item.id}>
                                        <StyledTableCell component="th" scope="row">
                                            <img src={item.image} style={{height:"80px", borderRadius:"10%"}}></img> 
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            {item.productName}
                                        </StyledTableCell>

                                        <StyledTableCell component="th" scope="row">
                                            {item.productDetails}
                                        </StyledTableCell>

                                        <StyledTableCell >
                                            {item.price}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            }).slice(sliceIndex,sliceIndex+4)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TablePage;

