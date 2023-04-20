import styled from "styled-components";
const AdminPanelWrapper = styled.div`
.admin_panel{
    height: 100vh;
    overflow-y: hidden;
.sideBarWhith {
    width: 25%;

}
.sideBar{
    transition: 0.3s;
    background-color: #2D2D31;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 38px !important;
    div{
        .sidebar_menu{
            padding-top: 10px;
            ul{
                padding: 0 !important;
                .w-100{
                color: #fff !important;
                }
                li{
                    min-width: 158px !important;
                    border-radius: 10px;
                    margin: 5px 0 !important;
                    background-color: transparent;
                    color: #fff !important;
                    transition: 0.2s;
                    :hover{
                        background-color:#ffffff65 !important;
                    }
                }
            }
        }
    }
}
.active_menu{
    background-color: #3B95EE !important;
}
.rightSide_width{
    width: 75%;
}
    .rightSide{
        transition: 0.4s;
        background-color: #f2f2f2;
            .header{
                width: 100%;
                background-color: rgba(255, 255, 255, 0.356) !important;
                box-shadow: -1px 5px 10px -1px rgba(34, 60, 80, 0.23);
                height: 80px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: sticky;
                top: 0;
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