import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div style={{
            textAlign: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <div style={{color: '#00966B', fontSize: '150px', fontWeight: 'bold'}} className="error-page-title">404</div>
            <div style={{fontSize: '34px'}}>Not Found</div>
            <p>The resource requested could not be found on this server.</p>
            <Link to='/' style={{color: 'white'}} className="error-page-back">Go Home</Link>
        </div>
    )
}