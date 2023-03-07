import styles from './TimeShow.module.scss';



const TimeShow = ({time}) => {
    const formatTime = (time) => {
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }

        let seconds = Math.floor(time / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);

        let millisec = time % 1000;
        seconds = seconds % 60;
        minutes = minutes % 60; 

            
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
            seconds,)}:${padTo2Digits(millisec)}`;

       // new Date(millseconds).toISOString().slice(11, 19); 
    
    }

    return (
        <div className={styles.timeShow}>
            {formatTime(time)}
        </div>
    );

};

export default TimeShow;