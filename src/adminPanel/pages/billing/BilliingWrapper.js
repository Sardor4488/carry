import styled from "styled-components";

const BillingWrapper = styled.div`
.billing{
    overflow-y:  scroll;
    height: 100vh;
}
.billing_informations{
  
}
.my_card{
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem; 

}
.billing_informations_card{
    background-color: #F0F2F5;
    border-radius: 10px;

}
.deleteBtn{
    font-size: 15px;
}
.informations_transaction{
    padding: 10px 0 ;
    .faCaretUp{
        border-radius: 50%;
        border: 1px solid #4FA953;
        padding: 10px;
        width: 10px;
        height: 10px;
        color: #4FA953;
    }
    .faCaretDown{
        border-radius: 50%;
        border: 1px solid red;
        padding: 10px;
        width: 10px;
        height: 10px;
        color: red;
    }
    .faExclamation{
        border-radius: 50%;
        border: 1px solid #000;
        padding: 10px;
        width: 10px;
        height: 10px;
        /* color: #F0F2F5; */
    }
}
.credit_card_type_mini{
    width: 30px;
}
.my_credit_card {
    border-radius: 10px;
}
.credit_card{
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem; 
    width: 100%;
    height: 240px;
    background-image: url(https://wallpaper-house.com/data/out/10/wallpaper2you_401296.jpg);
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    /* display: flex; */
    /* align-items:fl; */
}
.credit_card_type{
    width: 50px;
}
.informations_credit_card{
    margin-top: 100px;
}
.invoices_list{
    background-color: #fff;
    border-radius: 10px;
    min-height: 675px !important;
    overflow-y:  scroll;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem; 


}
.payment_method{
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem; 

}
.text-secondary-card{
    color: rgb(226, 226, 226);
    font-size: 13px;
}
.credit_card_info{
    font-size: 18px;
}
`
export default BillingWrapper;