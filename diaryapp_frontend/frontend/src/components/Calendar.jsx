import React, {useState} from "react"; 
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {

    const [events,setEvents] = useState([
        {
            title: "Event 1",
            start: "2024-03-01T10:00:00",
            end: "2024-03-01T11:00:00",
        },
    ]);

    const [newEventTitle, setNewEventTitle] = useState("");
    const [selectedDateTime, setSelectedDateTime] = useState(null);

    const handleDateClick = (info) => {
        setSelectedDateTime(info.dateStr +"T10:00:00");
    };

    const handleTimeChange = (e) => {
        setSelectedDateTime((prevDateTime) => {
          const datePart = prevDateTime ? prevDateTime.split("T")[0] : "";
          return datePart + "T" + e.target.value;
        });
      };

    

    const handleAddEvent = () => {
        if (selectedDateTime && newEventTitle) {
            const newEvent = {
                title: newEventTitle,
                start: selectedDateTime,
                end: selectedDateTime,
            };

            setEvents([...events,newEvent]);
            setNewEventTitle("");
            setSelectedDateTime(null);
        }

    };

    return <div> 
        <Fullcalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView={"timeGridDay"}
        headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth, timeGridWeek, timeGridDay",
        }}

        height={"90vh"}
        events={events}
        dateClick={handleDateClick}
        eventClick={(info) => console.log(info.event)}
        />

        <div style={{
            border: "1px solid #000000",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
            margin: "10px auto",
        }}
        >
            <label style={{ display: "block", marginBottom:"10px"}}>
                Event Title:
                <input
                type="text"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                style={{ width: "95%", padding:"8px", borderRadius:"5px", border:"1px solid #ccc"}}
                />
            </label>
        

        

            {selectedDateTime && (
                <>
                <p style={{ margin:"10px 0", fontSize:"14px"}}>
                    Selected Date & Time: {new Date(selectedDateTime).toLocaleString()}{""}

                </p>
                <p style={{margin:"10px 0"}}>
                    or choose a time:{""}
                    <input
                    type="time"
                    onChange={handleTimeChange}
                    style={{padding:"8px", borderRadius:"5px", border:"1px solid #ccc"}}
                    />
                </p>
                </>
            )}
            <div style={{display:"flex",alignItems:"center", justifyContent:"center" }}>
            <button onClick={handleAddEvent}
            style={{
                background:"#3498db",
                color:"#fff",
                padding:"10px",
                borderRadius:"5px",
                cursor:"pointer",
            }}
            
            > Add Event</button>
            </div>
            
        </div>

        </div>
    
        
}

export default Calendar;