namespace BlazorApp1.Client
{
    public class Location
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public double Accuracy { get; set; }
        public double Altitude { get; set; }
        public double AltitudeAccuracy { get; set; }
        public double Speed { get; set; }
        public double Heading { get; set; }

        public override string ToString()
        {
            return $"Location: ({Latitude}, {Longitude}) with accuracy {Accuracy}";
        }
    }
}
