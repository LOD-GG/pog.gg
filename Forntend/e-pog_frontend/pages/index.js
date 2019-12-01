import AppLayout from '../components/AppLayout/AppLayout';
import LeagueSelector from '../components/Home/LeagueSelector';
import TeamIntro from '../components/Home/TeamIntro';
import LiveStream from '../components/Home/LiveStream';
import MatchSchedule from '../components/Home/MatchSchedule';
import TeamRank from '../components/Home/TeamRank';
const Home = () => (
    <>
        
        <LeagueSelector/>
        <TeamIntro/>
        <LiveStream/>
        <MatchSchedule/>
        <TeamRank/>
    </>
)
export default Home;