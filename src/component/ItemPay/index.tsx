
import { useSelector, useDispatch } from "react-redux"
import { AiOutlineDelete } from "react-icons/ai";
import { AppDispatch } from "../../redux/store"
import { LProps } from "../List/reducer";
import { deletePay } from "../List/reducer";

import classNames from "classnames/bind"
import styles from "./style.module.scss";
const cx = classNames.bind(styles);

function ItemPay(props: LProps) {
    const { id, status, date, client, curency, total, invoice } = props
    const dispatch = useDispatch<AppDispatch>()

    function handleDelete() {
        dispatch(deletePay(id))
    }

    return <>
        <tr>
            {/* <th scope="row">{id}</th> */}
            <td className={cx(status == "Processing" ? "Processing" :
                status == "Received" ? "Received" :
                status == "Fulfilled" ? "Fulfilled" : "")}
            >{status}</td>
            <td>{date}</td>
            <td>{client}</td>
            <td>{curency}</td>
            <td>{total}</td>
            <td>{invoice}</td>
            <td><button type="button" className={cx("btn btn-outline-primary", "btn-view")} >View Details</button></td>
            <td className={cx("delete")}><AiOutlineDelete 
                onClick ={handleDelete}
            /></td>

        </tr>
    </>
}

export default ItemPay;