import "primereact/resources/themes/lara-light-cyan/theme.css";
import classes from "./style/listItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../order/orderSlice";
import { Button } from "primereact/button";
import { SmallBasket } from "../order/SmallBasket";
import { useRef, useState } from "react";
import { delBag } from "./bagApi";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Link, useNavigate } from "react-router-dom";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";

export const ListItem = ({ one, setDeleted, deleted }) => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [showSmallBasket, setShowSmallBasket] = useState(false);
    let userRole = useSelector(state => state.thisUser.currentUser)?.data.role;
    let userToken = useSelector(state => state.thisUser.currentUser)?.data.token;
    // const [showDialog, setShowDialog] = useState(false);


    // const toast = useRef(null);

    // const accept = () => {
    //     deleteAdmin();
    //     // setShowDialog(false);
    //     toast.current.show({ severity: 'info', summary: 'מחיקה', detail: 'המוצר נמחק מהמאגר', life: 3000 });
    // };

    // const reject = () => {
    //     // setShowDialog(false);
    //     toast.current.show({ severity: 'warn', summary: 'ביטול', detail: 'פעולת המחיקה בוטלה', life: 3000 });
    // };

    // const confirm1 = () => {
    //     confirmDialog({
    //         group: 'headless',
    //         mahmut: 'mahmut',
    //         message: 'Are you sure you want to proceed?',
    //         header: 'Confirmation',
    //         icon: 'pi pi-exclamation-triangle',
    //         defaultFocus: 'accept',
    //         accept,
    //         reject
    //     });
    // };


    const addOne = (event) => {
        event.preventDefault();
        let item = { ...one, count: 1 }
        dispatch(increase(item));

        setShowSmallBasket(true);
        setTimeout(() => {
            setShowSmallBasket(false);
        }, 5000);
    }
    // const update = (event) => {
    //     event.preventDefault();
    //     alert("עריכה")
    // }
    const toast = useRef(null);

    const accept = () => {
        navigate("/login");
        // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        // toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
    const confirm = (position) => {
        confirmDialog({
            message: 'עליך להתחבר שוב על מנת לבצע פעולה זו',
            header: 'התחברות מחדש',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };
    // const checkDelete = (event) => {
    //     event.preventDefault();
    //     // confirm1(one._id);
    //     if (!showDialog) {
    //         confirm1();
    //         setShowDialog(true);
    //     }
    // }

    const deleteAdmin = async (event) => {
        // event.preventDefault();

        try {
            let deletedBag = await delBag(one._id, userToken);
            setDeleted(!deleted)
            // navigate("/");
        }
        catch (err) {
            confirm('top-left');

        }
    }
    const deleteMessage = () => {
        deleteAdmin();
        toast.current.show({ severity: 'success', summary: 'מחיקה', detail: 'המוצר נמחק', life: 3000 });
    };


    const confirm2 = (event) => {
        event.preventDefault();
        confirmPopup({
            target: event.currentTarget,
            message: '?האם ברצונך למחוק פריט זה',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept: deleteMessage,
            acceptLabel: "כן",
            rejectLabel: "לא"

        });
    };

    return (<>


        <div style={{ direction: "rtl" }}>
            {showSmallBasket && <SmallBasket />}
            <Toast ref={toast}/>
            <ConfirmPopup />
            <div className={classes["container_card"]}>
                <div class="image-container" style={{ height: "300px", backgroundImage: `url(https://r-server-s5x2.onrender.com/${one.imgUrl})`, backgroundSize: 'cover', backgroundPosition: "center", backgroundPosition: "center 310px" }}></div>

                <div class="mb-4" className={classes["des_price"]}>
                    <div className={classes["description"]}>
                        <span>{one.company}</span>
                    </div>
                    <div className={classes["price"]}>
                        <span>₪{one.price}</span>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>

                    {userRole == "ADMIN" &&
                        // <Link to='/updateBag' >
                        <Link to={"/updateBag/" + one._id} state={one} style={{ width: "49%", paddingTop: "2px", marginLeft: "2px" }}>
                            <Button label="עריכה" outlined style={{ margin: "1%" }} >
                                <span class="p-button-icon p-c p-button-icon-left pi pi-pencil" data-pc-section="icon"></span>
                            </Button>
                        </Link>
                    }

                    {userRole == "ADMIN" && <Button label="מחיקה" severity="danger" outlined onClick={confirm2} style={{ margin: "1%", width: "49%", marginRight: "2px" }} >
                        <span class="p-button-icon p-c p-button-icon-left pi pi-trash" data-pc-section="icon"></span>
                    </Button>}
                </div>
                {/* <div style={{ display: "flex", flexDirection: "row" }}>
                    {userRole == "ADMIN" && <Button label="עריכה" outlined onClick={update} style={{ margin: "1%" }} >
                        <span class="p-button-icon p-c p-button-icon-left pi pi-pencil" data-pc-section="icon"></span>
                    </Button>}
                    {userRole == "ADMIN" && <Button label="מחיקה" severity="danger" outlined onClick={deleteAdmin} style={{ margin: "1%" }} >
                        <span class="p-button-icon p-c p-button-icon-left pi pi-trash" data-pc-section="icon"></span>
                    </Button>}
                </div> */}
                {(!userRole || userRole == "USER") && <Button class="p-button p-button-outlined" style={{ height: "40px" }}>
                    <span class="p-button-label p-c" data-pc-section="label" style={{ height: "30px", marginTop: "10px", textAlign: "center" }} onClick={addOne}>הוספה לסל</span>
                    <span class="p-button-icon p-c p-button-icon-left pi pi-shopping-cart" data-pc-section="icon"></span>
                </Button>}


                <div className="card">
                    <Toast ref={toast} />
                    <ConfirmDialog />
                    {/* <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => confirm('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} /> */}
                </div>
                {/* <ConfirmDialog 
                    group="headless"
                    content={({ headerRef, contentRef, footerRef, hide, message }) => (
                        <div className="flex flex-column align-items-center p-5 surface-overlay border-round">
                            <div className="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                                <i className="pi pi-question text-5xl"></i>
                            </div>
                            <span className="font-bold text-2xl block mb-2 mt-4" ref={headerRef}>
                                {message.header}
                            </span>
                            <p className="mb-0" ref={contentRef}>
                                {message.message}
                            </p>
                            <div className="flex align-items-center gap-2 mt-4" ref={footerRef}>
                                <Button
                                    label="Save"
                                    onClick={(event) => {
                                        hide(event);
                                        accept();
                                    }}
                                    className="w-8rem"
                                ></Button>
                                <Button
                                    label="Cancel"
                                    outlined
                                    onClick={(event) => {
                                        hide(event);
                                        reject();
                                    }}
                                    className="w-8rem"
                                ></Button>
                            </div>
                        </div>
                    )}
                />*/}
            </div>
        </div>
    </>
    );
}