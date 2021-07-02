 -- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th6 28, 2021 lúc 02:39 PM
-- Phiên bản máy phục vụ: 8.0.21
-- Phiên bản PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `booking_movie_ticket`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `movies`
--

DROP TABLE IF EXISTS `movies`;
CREATE TABLE IF NOT EXISTS `movies` (
  `movie_id` bigint NOT NULL AUTO_INCREMENT,
  `movie_name` varchar(255) NOT NULL,
  `aliases` varchar(255) NOT NULL,
  `trailer` varchar(255) NOT NULL,
  `movie_img` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `premiere_date` date DEFAULT NULL,
  `rate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`movie_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ;

--
-- Đang đổ dữ liệu cho bảng `movies`
--

INSERT INTO `movies` (`movie_id`, `movie_name`, `aliases`, `trailer`, `movie_img`, `premiere_date`, `rate`) VALUES
(1, 'Friends', 'Frie', 'https://youtu.be/HRXVQ77ehRQ', 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@.jpg', '2021-07-27', '5 star'),
(2, 'The Big Bang Theory', 'BiBaTh', 'https://youtu.be/WBb3fojgW0Q', 'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg', '2021-06-02', '5 star'),
(3, 'How I met your mother', 'HTMYM', 'https://youtu.be/aJtVL2_fA5w', 'https://thichphet.com/wp-content/uploads/2020/07/khi-bo-gap-me-phan-2-2006-how-i-met-your-mother-season-ii-15543.jpg', '2021-04-21', '4 star'),
(4, 'Black List', 'BlacLi', 'https://youtu.be/-WYdUaK54fU', 'http://photos.q00gle.com/storage/files/images-2020/uploads/danh-sach-den-phan-7-the-blacklist-season-7-73983-250x350.jpg', '2021-05-14', '4 star'),
(5, 'Dr.Stone', 'DrSt', 'https://youtu.be/KnEMDDMYYfU', 'https://images.danet.vn/images/src/343/243/1f1907a5591304e3487d1127ab1a0ea8.jpg', '2021-02-10', '5 star');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seats`
--

DROP TABLE IF EXISTS `seats`;
CREATE TABLE IF NOT EXISTS `seats` (
  `seat_id` bigint NOT NULL AUTO_INCREMENT,
  `seat_type` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `seat_price` int NOT NULL,
  `showtime_id` bigint NOT NULL,
  PRIMARY KEY (`seat_id`),
  KEY `fk_showtimeID` (`showtime_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 ;

--
-- Đang đổ dữ liệu cho bảng `seats`
--

INSERT INTO `seats` (`seat_id`, `seat_type`, `seat_price`, `showtime_id`) VALUES
(1, 'VIP', 50000, 2),
(2, 'Normal', 30000, 4),
(3, 'Normal', 30000, 1),
(4, 'Normal', 35000, 7),
(6, 'Exclusive', 70000, 2),
(8, 'VIP', 55000, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `showtimes`
--

DROP TABLE IF EXISTS `showtimes`;
CREATE TABLE IF NOT EXISTS `showtimes` (
  `showtime_id` bigint NOT NULL AUTO_INCREMENT,
  `date_and_time` datetime DEFAULT NULL,
  `showtime_duration` time NOT NULL,
  `movie_id` bigint NOT NULL,
  `theater_id` bigint NOT NULL,
  `ticket_price` int DEFAULT NULL,
  PRIMARY KEY (`showtime_id`),
  KEY `fk_showtime_movie_id` (`movie_id`),
  KEY `fk_showtimes_theater_id` (`theater_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 ;

--
-- Đang đổ dữ liệu cho bảng `showtimes`
--

INSERT INTO `showtimes` (`showtime_id`, `date_and_time`, `showtime_duration`, `movie_id`, `theater_id`, `ticket_price`) VALUES
(1, '2021-05-20 14:27:39', '01:27:58', 2, 5, NULL),
(2, '2021-06-02 13:40:28', '01:03:12', 1, 2, NULL),
(3, '2021-06-18 13:40:54', '02:00:06', 4, 5, NULL),
(4, '2021-04-20 13:41:16', '01:03:16', 3, 6, NULL),
(5, '2021-05-20 13:41:37', '01:07:22', 5, 4, NULL),
(6, '2021-06-13 13:42:39', '01:25:13', 2, 3, NULL),
(7, '2021-02-18 13:43:02', '01:31:02', 4, 1, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `theaters`
--

DROP TABLE IF EXISTS `theaters`;
CREATE TABLE IF NOT EXISTS `theaters` (
  `theater_id` bigint NOT NULL AUTO_INCREMENT,
  `theater_name` varchar(255) NOT NULL,
  `theater_img` varchar(255) NOT NULL,
  PRIMARY KEY (`theater_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 ;

--
-- Đang đổ dữ liệu cho bảng `theaters`
--

INSERT INTO `theaters` (`theater_id`, `theater_name`, `theater_img`) VALUES
(1, 'CGV Cinemas', 'https://www.cgv.vn/media/wysiwyg/about-5.PNG'),
(2, 'Galaxy Cinema', 'https://toplist.vn/images/800px/galaxy-cinema-104320.jpg'),
(3, 'Lotte Cinema', 'https://toplist.vn/images/800px/lotte-cinema-104336.jpg'),
(4, 'BHD Star Cineplex', 'https://toplist.vn/images/800px/bhd-star-cineplex-104333.jpg'),
(5, 'CineStar', 'https://toplist.vn/images/800px/cinestar-104341.jpg'),
(6, 'Mega GS', 'https://toplist.vn/images/800px/mega-gs-104344.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `user_account` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `user_type_id` bigint NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
