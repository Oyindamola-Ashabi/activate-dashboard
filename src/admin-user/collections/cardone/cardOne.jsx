import { Card, CardContent, Typography, Box } from "@mui/material";
import cardIcon from '../../../assets/tag.png'
import ordersicon from '../../../assets/orders.png'
import styleIcon from '../../../assets/connect-stylist.png'
// import { blue } from "@mui/material/colors";

const items = [
    {
        id: 1,
        icon: cardIcon,
        title: "Distributions"
    },
    {
        id: 2,
        icon: ordersicon,
        title: "Orders"
    },
    {
        id: 3,
        icon: styleIcon,
        title: "Connect with Stylists"
    }
];

const CardOne = () => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                marginTop: 1,
            }}
        >
            {items.map((item) => (
                <Card
                    key={item.id}
                    sx={{
                        width: 240,
                        height: 110,
                        // backgroundColor:"blue",
                        textAlign: "center",
                        // borderRadius: 3,
                        // boxShadow: "0px 4px 15px rgba(0,0,0,0.05)",
                        boxShadow: "0px 4px 10px rgba(103, 159, 210, 0.31)",
                        borderRadius: 3,
                        paddingTop: 2,
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0px 6px 20px rgba(0,0,0,0.1)"
                        }
                    }}
                >
                    <CardContent>
                        <div style={{ color: "#679FD2" }}>
                            <img src={item.icon} alt="icon-image" />
                        </div>
                        <Typography
                            sx={{
                                marginTop: 1,
                                fontWeight: 700,
                                // fontSize: 20,
                                color: "#679FD2",
                                fontFamily: "Inter"
                            }}
                        >
                            {item.title}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default CardOne;
