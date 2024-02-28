$(document).ready(function() {
    $('#capture-btn').click(function() {
        $.get('/capture_packets', function(data) {
            $('#packet-list').empty();
            data.forEach(function(packet) {
                var packetHtml = '<div class="packet">';
                packetHtml += '<p><strong>Timestamp:</strong> ' + new Date(packet.timestamp * 1000) + '</p>';
                packetHtml += '<p><strong>Source:</strong> ' + packet.source + '</p>';
                packetHtml += '<p><strong>Destination:</strong> ' + packet.destination + '</p>';
                packetHtml += '<p><strong>Protocol:</strong> ' + packet.protocol + '</p>';
                packetHtml += '<p><strong>Length:</strong> ' + packet.length + '</p>';
                packetHtml += '</div>';
                $('#packet-list').append(packetHtml);
            });
        });
    });
});
