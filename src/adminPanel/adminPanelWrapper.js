import styled from "styled-components";
const AdminPanelWrapper = styled.div`
.admin_panel{
    height: 100vh;
    
.sideBar{
    width: 25%;
    background-color: #2D2D31;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 38px !important;
    .sidebar_menu{
        padding-top: 10px;
        ul{
            padding: 0 !important;
            .w-100{
            color: #fff !important;
            }
            li{
                border-radius: 5px;
                margin: 5px 0 !important;
                background-color: transparent;
                color: #fff !important;
                transition: 0.2s;
                .active_menu{
                    background-color: #3B95EE !important;
                }
                :hover{
                    background-color:#ffffff65 !important;
                }
            }
        }
    }
}
    .rightSide{
        width: 75%;
        background-color: #f2f2f2;
            .header{
                width: 100%;
                background-color: #fff;
                box-shadow: -1px 5px 10px -1px rgba(34, 60, 80, 0.23);
                height: 80px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        
            div{
                .rounded{
                    background-color: #3445A1;
                    color: #fff;
                    border-radius: 50% !important;
                }
            }
        
    }
}
.c_pointer{
    cursor: pointer !important;
}
`
export default AdminPanelWrapper;