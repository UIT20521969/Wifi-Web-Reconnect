#!/bin/bash

# Thiết lập biến cờ để kiểm soát vòng lặp
running=true

# Hàm để bắt sự kiện tắt vòng lặp
function stop_loop() {
    running=false
}

# Gắn sự kiện tắt vòng lặp vào tín hiệu SIGINT (Ctrl+C)
trap stop_loop SIGINT

# Vòng lặp vô hạn
while $running; do
    # Thực hiện lệnh của bạn ở đây
    /d/me/ce222/wifi.sh
    
    # Chờ 5 phút
    sleep 2  # 300 giây = 5 phút
done
