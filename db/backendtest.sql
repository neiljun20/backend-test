-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2023 at 10:31 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backendtest`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `userPwd` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `userPwd`, `createdAt`, `updatedAt`) VALUES
(1, 'u1', '$2b$10$ELCCVO4xZxRv86RAroRvJeA4HgsiLUE6Cul9GTQj.nl7PSNEXJ1Cq', '2023-03-24 09:25:28', '2023-03-24 09:25:28'),
(2, 'u2', '$2b$10$BzPmRNNHBRP4E/GjVbaAbegzhj16Fse.hX5Wqe0bdsqLXZDrnU7BC', '2023-03-24 09:25:33', '2023-03-24 09:25:33'),
(3, 'u3', '$2b$10$zvY/4hyo0LzuiEmwqA8XaOAfjewF5DddGVyhuvu280zNbyu.XP0SW', '2023-03-24 09:25:38', '2023-03-24 09:25:38'),
(4, 'testUser', '$2b$10$yjeSCmwt9Frd7xQUA9b1EOoC.3ydv/QSe8Qq63IvZwifT4H4blCsW', '2023-03-24 09:28:49', '2023-03-24 09:28:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_name` (`userName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
