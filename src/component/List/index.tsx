import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import ReactPaginate from "react-paginate";

import ItemPay from "../ItemPay"
import { AppDispatch } from "../../redux/store"
import { LProps, fetchData } from "./reducer"
import classNames from "classnames/bind"
import styles from "./style.module.scss";
const cx = classNames.bind(styles);

interface Data {
    data: [],
    loading: boolean,
    error: any
}

interface RootState {
    listReducer: Data
}

function ListItem() {
    const itemsPerPage = 4
    const listData = useSelector((state: RootState) => state.listReducer.data)
    const dispatch = useDispatch<AppDispatch>()
    
    const [itemOffset, setItemOffset] = useState(0);
    
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = listData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(listData.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % listData.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    // console.log(listData)




    return (<div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    <th scope="col">Client</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Total</th>
                    <th scope="col">Invoice#</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.map((item: LProps) => {

                    return <ItemPay
                        key={item.id}
                        id={item.id}
                        status={item.status}
                        date={item.date}
                        client={item.client}
                        curency={item.curency}
                        total={item.total}
                        invoice={item.invoice}
                    />
                })}

            </tbody>
        </table>

        <div className={cx("pages")}>
            <div>
                <p>
                    Showing <b>4</b> from  <b>{listData.length}</b>
                </p>
            </div>
            <div>
                <ReactPaginate
                    breakLabel="..."
                    previousLabel="<"
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                />
            </div>
        </div>
    </div>)
}

export default ListItem