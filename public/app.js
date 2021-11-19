const acronyms = [
  {
    acronym: "ADSL",
    description:
      "Asymmetric Digital Subscriber Line. Technology that provides ‘broadband’ speeds of data transmission over copper lines.",
  },
  {
    acronym: "AGP",
    description:
      "Accelerated Graphics Port. A type of video interface introduced as an upgrading to PCI but now largely replaced by PCIe.",
  },
  {
    acronym: "AI",
    description:
      "Short for Artificial Intelligence. AI aims to develop computer hardware and software that emulates activities in the human brain, think and learn from experience, and carry out human-like duties.",
  },
  {
    acronym: "AV",
    description:
      "Short for AntiVirus. Program to scan a computer for malware and quarantine or remove it",
  },
  {
    acronym: "BIOS",
    description:
      "Basic Input-Output System. A firmware used to perform hardware initialization during PC booting and provide runtime services during operation. It usually comes preinstalled on a PC.",
  },
  {
    acronym: "BIT",
    description:
      "Abbreviation of ‘BInary digiT’. At a basic level, all computer data is just a series of 0s and 1s, each of which is called ‘a bit’.",
  },
  {
    acronym: "BSoD",
    description:
      ": Blue Screen of Death. An error screen that the Windows operating system displays in the event of a fatal system error.",
  },
  {
    acronym: "BTC",
    description:
      "BiTCoin. A compound of the words ‘bit’ and ‘coin’ and describes a type of digital currency or cryptocurrency.",
  },
  {
    acronym: "CAPTCHA",
    description:
      "Completely Automated Public Turing Test to tell Computers and Humans Apart. A string of letters and numbers that have to be typed in on a webpage before continuing. They exist because, although humans find them easy, computers do not.",
  },
  {
    acronym: "CD",
    description:
      "Compact Disc. A type of optical media, so-called because it uses light to read the data stored on the disk. CD-R stands for Compact Disc Recordable. A CD that can be recorded, but from which data cannot be deleted.",
  },
  {
    acronym: "CD-ROM",
    description:
      "Compact Disc Read-Only Memory. Basically the same as any other CD, except that it contains PC data.",
  },
  {
    acronym: "CD-RW",
    description:
      "Compact Disc Re-Writable. A CD that can be recorded multiple times and the space can be re-used.",
  },
  {
    acronym: "CODEC",
    description:
      "COder/DECoder. Referred to compression technologies that have two components, an encoder to compress the files, and a decoder to decompress. There are codecs for data (ZIP), images (JPEG, GIF, PNG), audio (MP3, AAC) and video (MPEG-2, MOV, MP4, MKV). There are two kinds of codecs: lossless (produce the same exact file as the original upon decompression) and lossy.",
  },
  {
    acronym: "CPU",
    description:
      "Central Processing Unit, or Processor. Basically, the brain of a PC. Chips are mass-produced and sorted by a process of binning.",
  },
  {
    acronym: "DDR",
    description:
      "Double Data Rate. A type of memory that sends and receives data twice every clock cycle, and therefore is capable of twice the data transfer rate of standard SDRAM. DDR2 refers to Double Data Rate Type 2, DDR3 to Double Data Rate Type 3, etc.",
  },
  {
    acronym: "DIMM",
    description:
      "Dual In-Line Memory Module. A type of memory chip that uses a 64-bit bus, as compared to 32-bit bus SIMM chips, to which it replaced. SO-DIMM: Small Outline Dual In-Line Memory Module, is the memory used in laptops, tablets or smartphones.",
  },
  {
    acronym: "DLC",
    description:
      "DownLoadable Content. Usually, additional content created for an already released video game, distributed by the publisher.",
  },
  {
    acronym: "DRAM",
    description:
      "Dynamic Random Access Memory. A type of RAM that stores each bit of data on separate capacitors.",
  },
  {
    acronym: "DV",
    description:
      "Digital Video. A protocol for the storage and transfer of audio-visual information usually over a Firewire connector.",
  },
  {
    acronym: "DVD",
    description:
      "Digital Versatile Disc. A type of optical media that allows far more storage than a CD. DVD+R: Digital Versatile Disc Recordable: a type of DVD in which data can be recorded, but not deleted. DVD-R is another variant. DVD+RW: Digital Versatile Disk Rewritable: a DVD that can be recorded, and its space re-used. DVD-RW is another variant. DVD-RAM: Digital Versatile Disc Random Access Memory: a DVD that can be written, erased, and re-written, making them suitable for us as RAM, although slower.",
  },
  {
    acronym: "DVI",
    description:
      "Digital Video Interface. A type of digital video connector which improved over VGA, but inferior to HDMI.",
  },
  {
    acronym: "ECC",
    description:
      "Error Correction Code. ECC memory uses a parity bit to insure that data has been transmitted correctly. It is both slower and more expensive than non-ECC memory, but more reliable.",
  },
  {
    acronym: "EOL",
    description:
      "End Of Life. In technology, a period after which the manufacturer will stop producing, selling, or updating a particular item.",
  },
  {
    acronym: "FAQ",
    description:
      "Frequently Asked Questions. A list of questions and answers relating to a particular subject, especially technology.",
  },
  {
    acronym: "FSB",
    description:
      "Front Side Bus. The part of a computer motherboard that allows the computer's processor to communicate with the RAM and the other components. Also the part of a bus where the driver sits.",
  },
  {
    acronym: "FTP",
    description:
      "File Transfer Protocol. A common method of transferring files via the internet from one host to another host.",
  },
  {
    acronym: "GIF",
    description:
      "Graphics Interchange Format. A graphics compressed file format.",
  },
  {
    acronym: "GUI",
    description:
      "Graphical User Interface. Standard procedures based on graphics and intuitive tools used to interact with a computer.",
  },
  {
    acronym: "HD",
    description:
      "High Definition. It is used to describe a standard of digital video or audio. For video, it means 1280 x 720 pixels, or 720p.",
  },
  {
    acronym: "HDD",
    description:
      "Hard Disk Drive. An array of magnetic disks that store data until deleted by the user, the system, or a program.",
  },
  {
    acronym: "HDMI",
    description:
      "High-Definition Multimedia Interface. A digital standard for transmitting high-definition video and audio via a cable. Its latest version can support 4K @ 144 Hz and 8K @ 30 Hz.",
  },
  {
    acronym: "HDTV",
    description:
      "High-Definition Television. The over-the-air television standard that replaced NTSC.",
  },
  {
    acronym: "HTML",
    description:
      "Hyper-Text Mark-up Language. A set of symbols inserted into files intended for display on the World Wide Web.",
  },
  {
    acronym: "I/O",
    description:
      "Input/Output. A generic term for data moving into or out of a computer or component.",
  },
  {
    acronym: "IP",
    description:
      "Internet Protocol. Protocol for communications on the Internet. It specifies the way information is packetized, addressed, transferred, routed and received by networked devices.",
  },
  {
    acronym: "IDE",
    description:
      "Integrated Development Environment. It provides comprehensive tools to programmers for software development. Also, Integrated Device Electronics: an old standard protocol for HDD communications made up of 40-conductor cables.",
  },
  {
    acronym: "IEEE",
    description:
      "Institute of Electrical and Electronics Engineers. An association which came up with most of these standards and acronyms.",
  },
  {
    acronym: "IGP",
    description:
      "Integrated Graphics Processor. A video processing unit or video 'card' integrated onto a computer motherboard or CPU.",
  },
  {
    acronym: "IRQ",
    description:
      "Interrupt Request. In short, it's a way for a component of a computer to get the processor's attention.",
  },
  {
    acronym: "ISA",
    description:
      "ndustry Standard Architecture. An obsolete expansion interface replaced by PCI and AGP in the mid-1990's.",
  },
  {
    acronym: "ISP",
    description:
      "Internet Service Provider. A company that provides access to the Internet.",
  },
  {
    acronym: "ICT",
    description:
      "Information and Comunication Techonologies. A broader term for modern compuitng and its extended capacities",
  },
  {
    acronym: "JPEG",
    description:
      "Joint Photographic Experts Group. (JAY-peg) is a commonly used method of lossy compression for digital images.",
  },
  {
    acronym: "LAN",
    description:
      "Local Area Network. Network cards are sometimes referred to as 'LAN cards' or 'LAN interfaces.'",
  },
  {
    acronym: "LASER",
    description:
      "Light Amplification by Stimulated Emission of Radiation. A device that stimulates a gas to produce a very narrow beam of radiation which has an extremely limited range of visible, infrared, or ultraviolet wavelengths.",
  },
  {
    acronym: "LCD",
    description:
      "Liquid Crystal Display. A type of solid-state technology used in modern monitors. It replaced CRT (Cathode-Ray Tube) ones.",
  },
  {
    acronym: "LED",
    description:
      "Light-Emitting Diode. A semiconductor that emits light known for its durability and low energy use.",
  },
  {
    acronym: "MBR",
    description:
      "Master Boot Record. The section of the hard drive located in the boot sector, which contains the partition table.",
  },
  {
    acronym: "MIPS",
    description:
      "Million Instructions per Second. A way to measure a processor's raw processing power. Its speed is measured in GHz.",
  },
  {
    acronym: "MOBO",
    description:
      "MOtherBOard. A cooler way to refer to the PCB found in general-purpose PCs and other electronic devices.",
  },
  {
    acronym: "MP3",
    description:
      "MPEG Audio Layer III. A lossy compression technology that allows a reduction in size compared to uncompressed audio.",
  },
  {
    acronym: "MS-DOS",
    description:
      "MicroSoft Disk Operating System. An early operating system based on commands with no available GUI.",
  },
  {
    acronym: "NIC",
    description:
      "Network Interface Card. It connects a computing device to a network and is often integrated into the motherboard.",
  },
  {
    acronym: "NPC",
    description:
      "Non-Playable Character. Any character in a game that is not controlled by a player, but often by the game’s AI.",
  },
  {
    acronym: "NTFS",
    description:
      "New Technology File System. The default Windows file system as opposed to old FAT32 (File Allocation Table 32).",
  },
  {
    acronym: "NVMe SSD",
    description:
      "Non-Volatile Memory express SSD. A PCIe-based SSD for high performance storage with a very fast interface as compared to the much slower IDE interface to address hard disk drives, which is unable to reach SSD transfer speeds. M.2 SSD just states that it is a small form factor. M.2 SSDs can come in SATA versions and NVMe versions, which describe the bus they use.",
  },
  {
    acronym: "OC",
    description:
      "OverClock. The practice of increasing the clock rate of a CPU/GPU/RAM to exceed that certified by the manufacturer.",
  },
  {
    acronym: "OEM",
    description:
      "Original Equipment Manufacturer. The company that manufactures a computer (or some other thing).",
  },
  {
    acronym: "OS",
    description:
      "Operating System. System software that manages computer hardware and programs automatically. Microsoft’s Windows, Linux, Apple’s Mac OS for desktops and Google’s Android for smartphones are examples of OSs.",
  },
  {
    acronym: "OSD",
    description:
      "On Screen Display. Information that is outputted via the computer's monitor, such as the settings for the monitor itself.",
  },
  {
    acronym: "PC",
    description:
      "Personal Computer. A multi-purpose computer whose size, capabilities, and price make it feasible for individual use.",
  },
  {
    acronym: "PCB",
    description:
      "Printed Circuit Board. Generic term for any board made of phenolic resins to which semiconductors are mounted.",
  },
  {
    acronym: "PCI",
    description:
      "Peripheral Component Interconnect. An expansion interfaces that replaced ISA in the past. Now superseded by PCIe, a newer expansion interface designed to replace the PCI and AGP interfaces.",
  },
  {
    acronym: "PCI-X",
    description:
      "Peripheral Component Interconnect Extended. A higher-bandwidth, 64-bit version of PCI used mainly in servers.",
  },
  {
    acronym: "PCMCIA",
    description:
      "Personal Computer Memory Card International Association. It defines the interface for laptop expansion cards.",
  },
  {
    acronym: "PDF",
    description:
      "Portable Document Format. A file type created by Adobe Systems Inc. to share and print files that cannot be modified.",
  },
  {
    acronym: "PEBKAC",
    description:
      "Problem Exists Between Keyboard and Chair. It means that the user is the cause of an apparent computer problem. PICNIC (Problem In Chair, Not In Computer) is a variation.",
  },
  {
    acronym: "PIXEL",
    description:
      "PICture ELement. The smallest portion of an image that a device is capable of printing or displaying. Modern pixel count (or resolution) is expressed in SD (Standard Definition: 480p), HD (High Def: 720p), FHD (Full HD: 1080p), QHD (Quad HD), 4K, etc.",
  },
  {
    acronym: "PS/2",
    description:
      "Personal System/2. IBM name of certain computer hardware, like the familiar purple and green mouse/keyboard port.",
  },
  {
    acronym: "PSU",
    description:
      "Power Supply Unit. It converts the alternating high-voltage current (AC) into direct current (DC), and they also regulate the DC output voltage to the fine tolerances required for modern computing components.",
  },
  {
    acronym: "QR",
    description:
      "Quick Response code. A type of matrix (or 2-dimensional) barcode with fast readability and greater storage capacity.",
  },
  {
    acronym: "RAID",
    description:
      "Redundant Array of Independent Disks. An arrangement of disk drives to improve data access speed and fault tolerance.",
  },
  {
    acronym: "RAM",
    description:
      "Random-Access Memory. Memory that stores information needed for running the system and for program execution.",
  },
  {
    acronym: "RDRAM",
    description:
      "Rambus Dynamic Random Access Memory. A very fast and expensive proprietary type of RAM made by Rambus.",
  },
  {
    acronym: "RJ45",
    description:
      "Registered Jack-45. An 8-pin connector used to connect a PC to a LAN. Originally used for telephone communications.",
  },
  {
    acronym: "RMA",
    description:
      "Return Merchandise Authorization. An RMA number is created to help the buyer return the products to the seller.",
  },
  {
    acronym: "ROM",
    description:
      "Read-Only Memory. This memory is not easily writable. It consists of necessary information for the system to operate.",
  },
  {
    acronym: "RFTM",
    description:
      "Read The F*** Manual. A not-so-nice way of telling someone that the question they're asking is answered in the manual accompanying a hardware device or software routine.",
  },
  {
    acronym: "SaaS",
    description:
      "Software as a Service. Software licensed on a subscription basis and accessed via the Internet. In simpler words, instead of purchasing the software, you are purchasing its usage license—which means the right to use the software hosted in the cloud.",
  },
  {
    acronym: "SATA",
    description:
      "Serial Advanced Technology Attachment. A faster interface that replaced the older PATA to connect a HDD to the mobo.",
  },
  {
    acronym: "SCSI",
    description:
      "Small Computer System Interface. Pronounced 'skuzzy'.A very fast and reliable interface used to connect a HDD to a computer's motherboard. Usually used only in high-end servers.",
  },
  {
    acronym: "SPOF",
    description:
      "Single Point of Failure. This refers to one piece of hardware (or also software) which, if it fails, will render a PC inoperative.",
  },
  {
    acronym: "SRAM",
    description:
      "Static Random Access Memory. Very fast RAM that holds data statically. Found in cache memory on HDDs and CPUs.",
  },
  {
    acronym: "SSD",
    description:
      "Solid State Drive. A flash-based storage device with no moving parts, which have much faster data access speed than HDDs. Its speed is not affected by fragmentation since they are not sequential devices. It has a limited number of read/write cycles.",
  },
  {
    acronym: "TDP",
    description:
      "Thermal Design Power. Maximum amount of heat that a CPU/GPU is expected to produce under workload.",
  },
  {
    acronym: "UEFI",
    description:
      "Unified Extensible Firmware Interface. Like BIOS, UEFI is pre-installed and is the first program that runs when booting a PC.",
  },
  {
    acronym: "UPC",
    description:
      "Universal Product Code. A code of a scannable strip of black bars over 12 numeric digits assigned to an item.",
  },
  {
    acronym: "UPS",
    description:
      "Uninterruptible Power Supply. A battery backup that provides uninterrupted flow of current to the connected devices.",
  },
  {
    acronym: "USB",
    description:
      "Universal Serial Bus. A plug and play interface that allows a computer to connect to peripherals. USB 1.0 supports data transfer rates of 12 MBps, USB 2.0 (hi-speed USB) supports a transfer rate of up to 60 MBps, USB 3.0 (SuperSpeed USB) reached 640 MBps. USB type-C sockets, now featured on modern-day Android smartphones and other devices, allow cable reversibility.",
  },
  {
    acronym: "VGA",
    description:
      "Video Graphics Array. The analogue interface standard for attachment of monitors and other VDUs to a computer.",
  },
  {
    acronym: "VDU",
    description:
      "Visual Display Unit. A monitor, projector, or other device used to display or project a computer's visual data.",
  },
  {
    acronym: "VRAM",
    description:
      "Video Random Access Memory. Memory used by a dedicated graphics card, motherboard or CPU to store image data.",
  },
  {
    acronym: "WEBINAR",
    description:
      "WEB semINAR. An engaging online event where a speaker, or small group of speakers, deliver a presentation to a large audience who may participate by submitting questions.",
  },
  {
    acronym: "WIDGET",
    description:
      "WIndow gaDGET. An application, or a component of a GUI, that enables a user to perform a function or access a service.",
  },
  {
    acronym: "WIFI",
    description:
      "Often wrongly thought as WIreless FIdelity. Brand name for a technology to achieve a wireless connection to a network.",
  },
  {
    acronym: "WIMP",
    description:
      "Windows, Icons, Menus and Pointer. A graphical environment intending to simplify and demystify computer use.",
  },
  {
    acronym: "WWW",
    description:
      "World Wide Web, or simply, Web. An information service that operates via the writing of the internet",
  },
];

console.log(acronyms);

const acronymsContainer = document.querySelector(".acronyms");
acronyms.forEach((acronym) => {
  const acronymItem = document.createElement("li");
  acronymItem.innerHTML = `<span class="acronym fw-bold">${acronym.acronym}</span> - <span class="description">${acronym.description}</span>`;
  acronymsContainer.appendChild(acronymItem);
});
