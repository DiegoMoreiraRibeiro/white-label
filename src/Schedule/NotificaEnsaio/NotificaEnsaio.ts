import NodeCron from 'node-cron'
import SendEmail from '../../Services/SendEmail'


class NotificaEnsaio{
    
    static Init(){
        NodeCron.schedule('* * * * *', () => {
            SendEmail.Send()
        })
    }

}

export default NotificaEnsaio