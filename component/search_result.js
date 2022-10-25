import style from "../styles/search_result.module.css"


export default function search_result() {
    return(
        <>
            <div className={style.searchcontainer}>
                <img src="image.jpg" alt="image" className={style.img}/> 
                <div>
                    <h1 className={style.name}>旅館名稱(旅館英文名稱)</h1>
                    <div>
                        <p className={style.location}>旅館地址</p>
                        <p className={style.room}>訂購房型</p>
                    </div>
                    <p>NT$價錢</p>
                    <p>住宿時間</p>
                    <p>訂單狀況</p>
                </div>
            </div>
        </>
    )
}
