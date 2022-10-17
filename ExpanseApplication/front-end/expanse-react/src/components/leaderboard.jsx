import "../App.css";
import Table from 'react-bootstrap/Table';
import Avatar from '@mui/material/Avatar';
import { Card, CardContent } from "@mui/material";
import ProfilePicture from '../assets/profilepic.jpeg'


const listTextStyle = {
    fontFamily: 'Sora'

}
 

function leaderboardComponent() {

    return (
        <div style={{minHeight: '300px', maxHeight: '300px', marginTop: '10px', overflow: 'scroll'}}>
            <span style={{ fontFamily: 'Manrope', fontWeight: '800', fontSize: '22px', lineHeight: '16px', color: '#050624', marginTop: '15px',marginLeft: '5px', }}>
                Leaderboard</span>
            <CardContent>
                <Table>
                    <thead >
                        <tr>
                            <th style={{fontFamily: 'Sora', fontSize: '18px'}}></th>
                            <th style={{fontFamily: 'Sora', fontSize: '18px'}}>Name</th>
                            <th style={{fontFamily: 'Sora', fontSize: '18px', paddingLeft: '5px'}}>Score</th>
                        </tr>
                    </thead>
                    <tbody style={{listTextStyle}}>
                        <tr>
                            <td><Avatar alt="Remy Sharp" src={ProfilePicture} /></td>
                            <td style={{fontFamily: 'Sora', fontSize: '16px', paddingTop: '15px'}}>Tom Krüse</td>
                            <td style={{fontFamily: 'Sora', fontSize: '16px', paddingTop: '15px'}}>38 %</td>
                        </tr>
                        <tr>
                            <td><Avatar alt="Remy Sharp" src={ProfilePicture}/></td>
                            <td style={{fontFamily: 'Sora', fontSize: '16px', paddingTop: '15px'}}>Angelika Schön</td>
                            <td style={{fontFamily: 'Sora', fontSize: '16px', paddingTop: '15px'}}>22 %</td>
                        </tr>
                    </tbody>
                </Table>
            </CardContent>
        </div>
    );
}

export default leaderboardComponent;