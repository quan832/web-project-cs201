-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th6 06, 2021 lúc 07:49 AM
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
  `movie_img` varchar(255) CHARACTER SET utf8  COLLATE utf8_general_ci NOT NULL,
  `premiere_date` date DEFAULT NULL,
  `rate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`movie_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seats`
--

DROP TABLE IF EXISTS `seats`;
CREATE TABLE IF NOT EXISTS `seats` (
  `seat_id` bigint NOT NULL AUTO_INCREMENT,
  `seat_name` varchar(255) NOT NULL,
  PRIMARY KEY (`seat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `showtimes`
--

DROP TABLE IF EXISTS `showtimes`;
CREATE TABLE IF NOT EXISTS `showtimes` (
  `showtime_id` bigint NOT NULL AUTO_INCREMENT,
  `date_and_time` datetime DEFAULT NULL,
  `ticket_id` bigint NOT NULL,
  `showtime_duration` time NOT NULL,
  `movie_id` bigint NOT NULL,
  `theater_id` bigint NOT NULL,
  PRIMARY KEY (`showtime_id`),
  KEY `fk_showtime_movie_id` (`movie_id`),
  KEY `fk_showtimes_theater_id` (`theater_id`),
  KEY `fk_showtimes_ticket_id` (`ticket_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `theaters`
--

DROP TABLE IF EXISTS `theaters`;
CREATE TABLE IF NOT EXISTS `theaters` (
  `theater_id` bigint NOT NULL AUTO_INCREMENT,
  `theater_name` varchar(255) NOT NULL,
  `theater_img` varchar(255) NOT NULL,
  `theater_system_id` bigint NOT NULL,
  PRIMARY KEY (`theater_id`),
  KEY `fk_theaters_theater_system_id` (`theater_system_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `theater_systems`
--

DROP TABLE IF EXISTS `theater_systems`;
CREATE TABLE IF NOT EXISTS `theater_systems` (
  `theater_system_id` bigint NOT NULL AUTO_INCREMENT,
  `theater_system_name` varchar(255) NOT NULL,
  `aliases` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  PRIMARY KEY (`theater_system_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tickets`
--

DROP TABLE IF EXISTS `tickets`;
CREATE TABLE IF NOT EXISTS `tickets` (
  `ticket_id` bigint NOT NULL AUTO_INCREMENT,
  `ticket_price` float NOT NULL,
  `showtime_id` bigint NOT NULL,
  `type_of_seat` varchar(255) NOT NULL,
  `serial` int DEFAULT NULL,
  `booked_seat` tinyint(1) DEFAULT NULL,
  `user_id` bigint NOT NULL,
  `seat_id` bigint NOT NULL,
  PRIMARY KEY (`ticket_id`),
  KEY `fk_tickets_seat_id` (`seat_id`),
  KEY `fk_tickets_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
