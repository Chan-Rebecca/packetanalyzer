from flask import Flask, render_template, jsonify
import pyshark

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/capture_packets')
def capture_packets():
    capture = pyshark.LiveCapture(interface='wlan0')  # Replace 'eth0' with your network interface
    packets = []
    for packet in capture.sniff_continuously(packet_count=10):  # Capture 10 packets
        packets.append({
            'timestamp': packet.sniff_time.timestamp(),
            'source': packet.ip.src,
            'destination': packet.ip.dst,
            'protocol': packet.transport_layer,
            'length': packet.length
        })
    return jsonify(packets)

if __name__ == '__main__':
    app.run(debug=True)
