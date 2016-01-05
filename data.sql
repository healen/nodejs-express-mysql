-- MySQL dump 10.11
--
-- Host: localhost    Database: node_test
-- ------------------------------------------------------
-- Server version	5.0.87-community-nt

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL auto_increment,
  `username` varchar(20) collate utf8_bin NOT NULL,
  `fristname` varchar(20) collate utf8_bin NOT NULL,
  `uptime` date default NULL,
  PRIMARY KEY  (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8 COLLATE=utf8_bin CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (64,'发反反复复','发反反复复','2015-12-30'),(65,'1','11111','2015-12-30'),(66,'1','11111','2015-12-30'),(67,'1','11111','2015-12-30'),(68,'1','11111','2015-12-30'),(69,'1','11111','2015-12-30'),(70,'55','555555','2015-12-30'),(71,'55','555555','2015-12-30'),(72,'张晓东','111111','2015-12-30'),(73,'1','1','2015-12-30'),(74,'1','1','2015-12-30'),(75,'1','1','2015-12-30'),(76,'1','1','2015-12-30'),(77,'1','1','2015-12-30'),(78,'1','1','2015-12-30'),(79,'1','1','2015-12-30'),(80,'555','55','2015-12-30'),(81,'555','55','2015-12-30'),(82,'555','55','2015-12-30'),(83,'555','55','2015-12-30'),(84,'555','55','2015-12-30'),(85,'555','55','2015-12-30'),(86,'555','55','2015-12-30'),(87,'555','55','2015-12-30'),(88,'55555','5555555','2015-12-30');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_me`
--

DROP TABLE IF EXISTS `user_me`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_me` (
  `user_id` int(11) NOT NULL auto_increment,
  `frist_name` char(50) collate utf8_bin default NULL,
  `last_name` char(50) collate utf8_bin default '匿名',
  `job` char(50) collate utf8_bin default NULL,
  `about_me` text collate utf8_bin,
  `up_time` datetime default NULL,
  PRIMARY KEY  (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_me`
--

LOCK TABLES `user_me` WRITE;
/*!40000 ALTER TABLE `user_me` DISABLE KEYS */;
INSERT INTO `user_me` VALUES (19,'防守打法','范德萨','富士达','方式防守打法分四大的','2016-01-05 14:33:38'),(21,'防','防','富士达','方式防守打法分四大的','2016-01-05 16:12:51'),(22,'555','555','555','55555','2016-01-05 16:13:23');
/*!40000 ALTER TABLE `user_me` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-01-05 17:10:39
