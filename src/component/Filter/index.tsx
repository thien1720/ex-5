import { useState , useCallback } from "react";
import { useSelector, useDispatch } from "react-redux"
import classNames from "classnames/bind"

import { fetchFilter } from "../List/reducer";
// import { FilterPay } from "../List/reducer";
import { AppDispatch } from "../../redux/store"
import styles from "./style.module.scss";


const cx = classNames.bind(styles);

function ListFilter() {
    const [filter, setFilter] = useState({ status: "", totalFrom: 0, totalTo: 0 })
    const dispatch = useDispatch<AppDispatch>()
    console.log(filter)
    const handledleAplly =useCallback((e: any) =>{
        e.preventDefault()
        // console.log(filter) 
        dispatch(fetchFilter(filter))
        // dispatch(FilterPay(filter))
    }, [filter])

    return (<div>
        <form className={cx("style-form", "align-items-center")}>
            <div className={cx("form-filter row gy-2 gx-3")}>
                <div className="col-auto">
                    <label className="visually-hidden" htmlFor="autoSizingSelect">Status</label>
                    <select className="form-select" id="autoSizingSelect"
                        onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                        value={filter.status
                        }
                        name="status"
                    >
                        <option selected>Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Fulfilled">Fulfilled</option>
                        <option value="Fulfilled">Fulfilled</option>
                        <option value="Processing">Processing</option>

                    </select>
                </div>

                <div className="col-auto">
                    <label className="visually-hidden" htmlFor="totalFrom">Name</label>
                    <input type="number"
                        className={cx("form-control", "re-input")}
                        id="totalFrom"
                        name='totalFrom'
                        value={filter.totalFrom}
                        placeholder="From"
                        onChange={(e) => setFilter({ ...filter, totalFrom: Number(e.target.value) })}

                    />
                </div>

                <div className="col-auto">
                    <label className="visually-hidden" htmlFor="totalTo">Name</label>
                    <input type="number"
                        className={cx("form-control", "re-input")}
                        id="totalTo"
                        name="totalTo"
                        placeholder="To"
                        onChange={(e) => setFilter({ ...filter, totalTo: Number(e.target.value) })}

                    />
                </div>

                <div className="col-auto">
                    <label className="visually-hidden" htmlFor="Invoice">Name</label>
                    <input type="number"
                        className={cx("form-control", "re-input")}
                        id="Invoice"
                        placeholder="Invoice#"
                        disabled
                    />
                </div>
            </div>

            <div className={cx("apply-clear")}>
                <button className={cx("btn btn-outline-info")}
                    onClick={handledleAplly}
                >Apply</button>
                <button className={cx("btn btn-outline-danger")}>Clear</button>

            </div>
        </form>


    </div>);
}

export default ListFilter;